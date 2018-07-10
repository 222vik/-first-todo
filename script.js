window.onload = function(){  // метод выполняет функцию только после того, как вся страница загрузится;
  console.log('Todo list was ready');
  let todo_list=document.getElementById('todo_list'); //создаем переменную и в нее получаем готовый элемент по id,
                                                      //который уже существует в HTML-коде;
  let li=document.createElement('li');  //создаем переменную и в нее создаем элемент HTML-структуры (тут элемент li);
  const text=document.createTextNode('Почистить зубы');  //создаем переменную и в ней создаем текстовый узел,
                                                        //который вставляется в HTML;
  li.className='list-group-item';  //добавляем переменной li класс='list-group-item';
  li.appendChild(text);  //этот метод впихивает переменную(text) внутрь переменной  li;
  todo_list.appendChild(li);  //тут этот метод впихивает что-то (li) внутрь коробки (todo_list);

  let lp=document.createElement('li');  //создаем переменную lp (отличную от переменной li)
                                        // и в ней создаем элемент HTML-структуры (тут элемент li);
  const tex=document.createTextNode('Позавтракать');  //создаем переменную (другую, уникальную) и в ней создаем текстовый узел,
                                                      //который вставляется в HTML;
  lp.className='list-group-item';  //присваиваем переменной (lp) имя класса ('list-group-item');
  lp.appendChild(tex);  //в родительскую переменную(lp) впихиваем дочернюю переменную(здесь tex);
  todo_list.appendChild(lp);  //в родительскую переменную(todo_list), впихиваем дочернюю переменную(здесь lp);

  let ln=document.createElement('li');  //создаем переменную ln (отличную от переменной li)
                                        // и в ней создаем элемент HTML-структуры (тут элемент li);
  const tes=document.createTextNode('Одеться');  //создаем переменную (другую, уникальную) и в ней создаем текстовый узел,
                                                      //который вставляется в HTML;
  ln.className='list-group-item';  //присваиваем переменной (ln) имя класса ('list-group-item');
  ln.appendChild(tes);  //в родительскую переменную(ln) впихиваем дочернюю переменную(здесь tes);
  todo_list.appendChild(ln);  //в родительскую переменную(todo_list), впихиваем дочернюю переменную(здесь ln);

  let lr=document.createElement('li');  //создаем переменную lr (отличную от переменной li)
                                        // и в ней создаем элемент HTML-структуры (тут элемент li);
  const teh=document.createTextNode('Пойти на работу');  //создаем переменную (другую, уникальную) и в ней создаем текстовый узел,
                                                      //который вставляется в HTML;
  lr.className='list-group-item';  //присваиваем переменной (lr) имя класса ('list-group-item');
  lr.appendChild(teh);  //в родительскую переменную(lr) впихиваем дочернюю переменную(здесь teh);
  todo_list.appendChild(lr);  //в родительскую переменную(todo_list), впихиваем дочернюю переменную(здесь lr);
}
