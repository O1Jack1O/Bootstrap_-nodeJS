
var arrayEvents = [];

export const events = (nameEvent, cb) => {
    
    if (arrayEvents.some(e => e.nameEvent == nameEvent)) {
        document.dispatchEvent(arrayEvents.filter(e => e.nameEvent == nameEvent)[0].someEvent)
        console.log(arrayEvents.filter(e => e.nameEvent == nameEvent)[0].nameEvent)

    } else {
        const someEvent = new Event(nameEvent);
        arrayEvents.push({ nameEvent, cb, someEvent });
        document.addEventListener(nameEvent, cb);
        document.dispatchEvent(someEvent);
    }
}



