
function drawCalendar(year, month, html){
    const date = new Date(year, month);
    
    html.innerHTML = date;

    console.log(date);
    console.log(date.getDate.length)

}

drawCalendar(2000, 2, calendar);














// class Button {
//     constructor(width, height, label) {
//         this.width = width;
//         this.height = height;
//         this.label = label;
//     }

//     get button() {
//         const button = document.createElement('button');
//         this.init(button);

//         return button;
//     }

//     handleClick() {
//         alert(111);
//     }

//     setProperties(button) {
//         button.style.width = `${this.width}px`;
//         button.style.height = `${this.height}px`;
//         button.innerHTML = this.label;
//     }
    
//     init(button) {
//         this.setProperties(button);
//         button.addEventListener('click', this.handleClick);
//     }

//     render() {
//         const button = this.button;

//         document.body.appendChild(button);
//     }
// }

// class Link extends Button {
//     constructor(width, height, label, href) {
//         super(width, height, label);

//         this.href = href;
//     }

//     addStyles(button) {
//         button.style.backgroundColor = 'transparent';
//         button.style.border = 'none';
//         button.style.color = 'blue';
//         button.style.textDecoration = 'underline';
//     }

//     init(button) {
//         this.setProperties(button);
//         this.addStyles(button);

//         button.addEventListener('click', this.handleClick);
//     }

//     handleClick = (e) => {
//         e.preventDefault();

//         window.location.href = this.href;
//     }
// }

// const link = new Link(100, 30, 'Click', 'www.by');

// link.render();



