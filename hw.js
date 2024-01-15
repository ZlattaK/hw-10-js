"use strict";

function Lamp(power, costPerKWh) {
    this.power = power;
    this.costPerKWh = costPerKWh;
    this.isOn = false;
    this.burningTime = 0;

    this.turnOn = function () {
        if (!this.isOn) {
            this.isOn = true;
            console.log('Лампочка включена.');
        } else {
            console.log('Лампочка уже включена.');
        }
    };

    this.turnOff = function () {
        if (this.isOn) {
            this.isOn = false;
            console.log('Лампочка выключена.');
        } else {
            console.log('Лампочка уже выключена.');
        }
    };

    this.getBurnedEnergyCost = function () {
        const energyConsumed = this.burningTime * this.power / 60;
        const cost = energyConsumed * this.costPerKWh;
        return cost;
    };

    this.setCostPerKWh = function (newCost) {
        this.costPerKWh = newCost;
        console.log(`Новая стоимость электроэнергии: ${this.costPerKWh} BYN за кВтч`);
    };

    this.showStatus = function () {
        console.log(`Мощность: ${this.power} Вт`);
        console.log(`Текущее состояние: ${this.isOn ? 'включена' : 'выключена'}`);
        console.log(`Счетчик горения: ${this.burningTime} мин`);
        console.log(`Расход за горение: ${this.getBurnedEnergyCost()} BYN`);
    };
}

const lamp = new Lamp(60, 0.15);

console.log('Текущий статус лампочки');
lamp.showStatus();

lamp.turnOn();

console.log('Статус лампочки после включения');
lamp.showStatus();

console.log('Выключение');
lamp.turnOff();

console.log('Статус лампочки после выключения');
lamp.showStatus();

lamp.setCostPerKWh(0.12);

console.log('Текущий статус лампочки после изменения стоимости');
lamp.showStatus();


function ColorLamp(power, costPerKWh, color) {
    Lamp.call(this, power, costPerKWh);
    
    this.color = color || 'Белый'; 
}

ColorLamp.prototype = Object.create(Lamp.prototype);
ColorLamp.prototype.constructor = ColorLamp; 

ColorLamp.prototype.showStatus = function () {
    Lamp.prototype.showStatus.call(this);
    
    console.log(`Цвет: ${this.color}`);
};

const colorLamp = new ColorLamp(75, 0.18, 'Фиолетовый');

console.log('Текущий статус цветной лампочки:');
colorLamp.showStatus();

colorLamp.turnOn();

console.log('Статус цветной лампочки после включения:');
colorLamp.showStatus();

colorLamp.turnOff();

console.log('Статус цветной лампочки после выключения:');
colorLamp.showStatus();

colorLamp.setCostPerKWh(0.14);

console.log('Текущий статус цветной лампочки после изменения стоимости:');
colorLamp.showStatus();


//доп

function DOM1() {}

DOM1.prototype = {
    create: function (tagName) {
        return document.createElement(tagName);
    },
    
    attr: function (element, name, value) {
        if (value === undefined) {
            return element.getAttribute(name);
        } else {
            element.setAttribute(name, value);
        }
    },
    
    html: function (element, value) {
        if (value === undefined) {
            return element.innerHTML;
        } else {
            element.innerHTML = value;
        }
    },
    
    search: function (element, selector) {
        return element.querySelectorAll(selector);
    },
    
    addClass: function (element, className) {
        element.classList.add(className);
    },
    
    removeClass: function (element, className) {
        element.classList.remove(className);
    },
    
    toggleClass: function (element, className) {
        element.classList.toggle(className);
    },
    
    hasClass: function (element, className) {
        return element.classList.contains(className);
    },
    
    append: function (element, newElement, beforeElement) {
        if (beforeElement === undefined) {
            element.appendChild(newElement);
        } else {
            element.insertBefore(newElement, beforeElement);
        }
    },
    
    on: function (element, eventName, funcName) {
        element.addEventListener(eventName, funcName.bind(element));
    }
};

const dom = new DOM1();


const newDiv = dom.create('div');
dom.attr(newDiv, 'id', 'myDiv');
dom.html(newDiv, 'Настройки вашей лампочки');
dom.addClass(newDiv, 'myClass');

const parentElement = document.getElementById('parentElement');
dom.append(parentElement, newDiv);

dom.on(newDiv, 'клик', function (event) {
    console.log('вы кликнули');
    console.log('настройки:', this);
    console.log('выбор:', event);
});

