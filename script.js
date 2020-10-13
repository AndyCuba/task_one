Date.prototype.daysInMonth = function () {
  return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

function drawCalendar(year, month, htmlElement) {
  const calendar = new Date(year, month);

  for (i = 0; i < calendar.daysInMonth(); i++) {
    let weekDays = new Date(year, month, i + 1);
    console.log(weekDays);
    console.log(assignWeekDays(weekDays));


    htmlElement.innerHTML += `<div>${weekDays}, ${assignWeekDays(
      weekDays
    )}</div>`;
  }
  function assignWeekDays(date) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[date.getDay()];
  }

  // console.log(getWeekDay(calendar));
}

drawCalendar(2020, 7, calendar);






















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
