// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 
// MIT license
 
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

/*
 * TouchScroll - using dom overflow:scroll
 * by kmturley
 */

/*globals window, document */

var TouchScroll = function () {
    'use strict';
    
    var module = {
        axis: 'x',
        drag: false,
        zoom: 1,
        time: 0.04,
        ignoreDraggableElements: false,
        isIE: window.navigator.userAgent.toLowerCase().indexOf('msie') > -1,
        isFirefox: window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
        /**
         * @method init
         */
        init: function (options) {
            var me = this;
            this.options = options;
            
            // find target element or fall back to body
            if (options && options.id) {
                this.el = document.getElementById(options.id);
            }
            if (!this.el) {
                if (this.isIE || this.isFirefox) {
                    this.el = document.documentElement;
                } else {
                    this.el = document.body;
                }
            }

            // ignore scrolling for draggbles e.g. when img dragable
            if (options && options.ignoreDraggableElements) {
                this.ignoreDraggableElements = true;
              }

            // if draggable option is enabled add events
            if (options.draggable === true) {
                if (this.isIE) {
                    document.ondragstart = function () { return false; };
                }
                if (this.isIE || this.isFirefox) {
                    this.body = document.documentElement;
                } else {
                    this.body = document.body;
                }
                this.addEvent('mousedown', this.el, function (e) { me.onMouseDown(e); });
                this.addEvent('mousemove', this.el, function (e) { me.onMouseMove(e); });
                this.addEvent('mouseup', this.body, function (e) { me.onMouseUp(e); });
            }
            
            // if zoom option exists add mouse wheel functionality to element
            if (options && options.zoom) {
                this.elzoom = document.getElementById(options.zoom);
                if (this.isFirefox) {
                    this.addEvent('DOMMouseScroll', this.el, function (e) { me.onMouseWheel(e); });
                } else {
                    this.addEvent('mousewheel', this.el, function (e) { me.onMouseWheel(e); });
                }
            }
            
            // if scroll options exist add events
            if (options && options.prev) {
                this.prev = document.getElementById(options.prev);
                this.addEvent('mousedown', this.prev, function (e) {
                    me.onMouseDown(e);
                });
                this.addEvent('mouseup', this.prev, function (e) {
                    me.diffx = options.distance ? (-options.distance / 11) : -11;
                    me.onMouseUp(e);
                });
            }
            if (options && options.next) {
                this.next = document.getElementById(options.next);
                this.addEvent('mousedown', this.next, function (e) {
                    me.onMouseDown(e);
                });
                this.addEvent('mouseup', this.next, function (e) {
                    me.diffx = options.distance ? (options.distance / 11) : 11;
                    me.onMouseUp(e);
                });
            }
        },
        /**
         * @method addEvent
         */
        addEvent: function (name, el, func) {
            if (el.addEventListener) {
                el.addEventListener(name, func, false);
            } else if (el.attachEvent) {
                el.attachEvent('on' + name, func);
            } else {
                el[name] = func;
            }
        },
        /**
         * @method cancelEvent
         */
        cancelEvent: function (e) {
            if (!e) { e = window.event; }
            if (e.target && e.target.nodeName === 'IMG') {
                e.preventDefault();
            } else if (e.srcElement && e.srcElement.nodeName === 'IMG') {
                e.returnValue = false;
            }
        },
        /**
         * @method onMouseDown
         */
        onMouseDown: function (e) {
            if( this.ignoreDraggableElements && e.target.draggable ) {
                return;
            } 
            
            if (this.drag === false || this.options.wait === false) {
                // ignore mousedown event if emitted on scrollbar
                this.drag = e.offsetX <= e.target.clientWidth && e.offsetY <= e.target.clientHeight;
                this.cancelEvent(e);
                this.startx = e.clientX + this.el.scrollLeft;
                this.starty = e.clientY + this.el.scrollTop;
                this.diffx = 0;
                this.diffy = 0;
            }
        },
        /**
         * @method onMouseMove
         */
        onMouseMove: function (e) {
            if (this.drag === true) {
                this.cancelEvent(e);
                this.diffx = (this.startx - (e.clientX + this.el.scrollLeft));
                this.diffy = (this.starty - (e.clientY + this.el.scrollTop));
                this.el.scrollLeft += this.diffx;
                this.el.scrollTop += this.diffy;
            }
        },
        /**
         * @method onMouseMove
         */
        onMouseUp: function (e) {
            if (this.drag === true) {
                if (!this.options.wait) {
                    this.drag = null;
                }
                this.cancelEvent(e);
                var me = this,
                    start = 1,
                    animate = function () {
                        var step = Math.sin(start);
                        if (step <= 0) {
                            me.diffx = 0;
                            me.diffy = 0;
                            window.cancelAnimationFrame(animate);
                            me.drag = false;
                        } else {
                            me.el.scrollLeft += me.diffx * step;
                            me.el.scrollTop += me.diffy * step;
                            start -= me.time;
                            window.requestAnimationFrame(animate);
                        }
                    };
                animate();
            }
        },
        /**
         * @method onMouseMove
         */
        onMouseWheel: function (e) {
            this.cancelEvent(e);
            if (e.detail) {
                this.zoom -= e.detail;
            } else {
                this.zoom += (e.wheelDelta / 1200);
            }
            if (this.zoom < 1) {
                this.zoom = 1;
            } else if (this.zoom > 10) {
                this.zoom = 10;
            }
            /*
            this.elzoom.style.OTransform = 'scale(' + this.zoom + ', ' + this.zoom + ')';
            this.elzoom.style.MozTransform = 'scale(' + this.zoom + ', ' + this.zoom + ')';
            this.elzoom.style.msTransform = 'scale(' + this.zoom + ', ' + this.zoom + ')';
            this.elzoom.style.WebkitTransform = 'scale(' + this.zoom + ', ' + this.zoom + ')';
            this.elzoom.style.transform = 'scale(' + this.zoom + ', ' + this.zoom + ')';
            */
            this.elzoom.style.zoom = this.zoom * 100 + '%';
            //this.el.scrollLeft += e.wheelDelta / 10;
            //this.el.scrollTop += e.wheelDelta / 8;
        }
    };
    return module;
};

/* 
 * create timer animation
 */
let timerAnimation = document.createElement("div");
timerAnimation.id = "countdown";
let svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
let circle = document.createElementNS('http://www.w3.org/2000/svg', "circle");
circle.setAttributeNS(null, 'r', 18);
circle.setAttributeNS(null, 'cx', 20);
circle.setAttributeNS(null, 'cy', 20);
svg.appendChild(circle);
timerAnimation.appendChild(svg);

/* 
 * init imgages for drag and drop (dnd)
 */
let list = document.getElementById("carousel-draggable");
let imgs = list.getElementsByTagName("img");
let deg = -50;
for (const img of imgs) {
    // flag to identify dnd items in events
    img.selectable = true;

    img.draggable = false;
    img.onmousedown = onMouseDown;
    img.onmouseup = onMouseUp;
    img.onmousemove = onMouseMove;

    img.ondragstart = onDragStart;
    img.ondragend = onDragEnd;
    img.ondragover = onDragOver;
    img.ondrop = onDragDrop;

    // for demo individually recolor imgs  
    img.style.filter = `hue-rotate(${deg}deg)`;
    deg = deg + 50;
}

/* 
 * event handler for dnd 
 */
let currDrag = null;

function onMouseDown(e) {
    if (!this.selectable) return;

    if (!this.draggable) {
        // enable drag and drop when timeout reached and not canceled
        const delay = 1000;
        this.dragTimeOut = setTimeout(() => {
                this.draggable = true;
                this.classList.add("select")
            }, delay)
            // set off timer animation for ux
        setTimeout(() => this.parentElement.appendChild(timerAnimation), 25);
    } else if (!currDrag) {
        this.dragTimeOut = setTimeout(() => {
            this.draggable = false;
            this.classList.remove("select")
        }, 200);
    }
}

function onMouseUp(e) {
    if (!this.selectable) return;

    // cancel dnd on mouse release when timeout not reached
    if (!this.draggable || currDrag) {
        clearTimeout(this.dragTimeOut);
    }

    if (this.parentElement.contains(timerAnimation)) {
        this.parentElement.removeChild(timerAnimation);
    }
}

function onMouseMove(e) {
    if (!this.selectable) return;

    // cancel dnd on hold and move
    if (!this.draggable || currDrag) {
        clearTimeout(this.dragTimeOut);
    }

    if (this.parentElement.contains(timerAnimation)) {
        this.parentElement.removeChild(timerAnimation);
    }
}

function onDragStart(e) {
    if (!this.selectable) return;

    setTimeout(() => this.classList.add("invisible"), 0);
    currDrag = this;
}

function onDragEnd(e) {
    e.preventDefault();
    if (!this.selectable) return;

    currDrag = null;
    setTimeout(() => this.classList.remove("invisible"), 0);
}

function onDragDrop(e) {
    e.preventDefault();
    // swap images
    if (currDrag) {
        let prevParent = currDrag.parentElement;
        let newParent = this.parentElement;
        prevParent.insertBefore(this, prevParent.children[0]);
        newParent.insertBefore(currDrag, newParent.children[0]);

        currDrag.draggable = false;
        currDrag.classList.remove("select")
    }
}

function onDragOver(e) {
    if (!this.selectable) return;
    // without this drop event won't be emitted
    e.preventDefault()
}