import { brotliCompressSync } from 'zlib';

/*
  1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
     При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.textContent = 'Удали меня';
    document.body.append(button);
    button.addEventListener('click', function (event) {
        let parent = event.target.parentNode;
        parent.removeChild(event.target);
    });
}

/*
  2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
     Функция выводит этот массив в виде маркированного списка внутри тега body.
     При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let list = document.createElement('ul');
    document.body.append(list);
    for (let str of arr) {
        let listElement = document.createElement('li');
        listElement.textContent = str;
        list.append(listElement);
    }
    list.addEventListener(
        'mouseover',
        function (event) {
            if (event.target && event.target.nodeName === 'LI') {
                event.target.setAttribute('title', event.target.textContent);
            }
        },
        true,
    );
}

/*
  3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

     <a href="https://tensor.ru/">tensor</a>

     При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
     При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    document.body.insertAdjacentHTML(
        'afterbegin',
        '<a href="https://tensor.ru/">tensor</a>',
    );
    let a = document.body.querySelector('a');
    a.addEventListener(
        'click',
        function (event) {
            event.preventDefault();
            event.target.textContent += ` ${event.target.href}`;
        },
        {
            once: true,
        },
    );
    /* let a = document.createElement('a'); еще так можно было
   a.setAttribute('href', 'https://tensor.ru/');
   a.textContent = 'tensor';
   document.body.append(a); */
}

/*
  4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

     <ul>
        <li>Пункт</li>
     </ul>
     <button>Добавить пункт</button>

     При клике по элементу li ему в конец текста добавляется восклицательный знак.
     При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
     Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let body = document.body;
    body.insertAdjacentHTML(
        'afterbegin',
        '<ul><li>Пункт</li></ul><button>Добавить пункт</button>',
    );
    let list = body.querySelector('ul');
    list.addEventListener(
        'click',
        function (event) {
            if (event.target && event.target.nodeName === 'LI') {
                event.target.textContent += '!';
            }
        },
        true,
    );
    let button = body.querySelector('button');
    button.addEventListener('click', function (event) {
        let listElement = document.createElement('li');
        listElement.textContent = 'Пункт';
        list.append(listElement);
    });
}
