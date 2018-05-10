const isFunction = v => (typeof v === 'function');

const Scheduled = (delay) => (target, name, descriptor) => {
    const fn = descriptor.value;
    if (!isFunction(fn)) {
        console.warn('Function!!!!!');
        return;
    }
    const bound = function () {
        this.scheduledId = setInterval(() => {
            fn.apply(this);
        }, delay);
    };
    return {
        get() {
            if (this.scheduledId) {
                clearInterval(this.scheduledId);
                return bound;
            }
            return bound;
        },
    };
};

export default Scheduled;
