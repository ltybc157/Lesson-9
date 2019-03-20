
    let age = document.getElementById('age');
    let btn = document.querySelector('button');

    function showUser(surname, name) {
        btn.addEventListener('click', function() {
        age.addEventListener('input', function() {
        showUser.apply(age, ['Jone', 'Mark']);
   })
 });
   console.log("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser();




    