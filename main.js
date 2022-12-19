import Cat from './components/cat.js';
import Dog from './components/dog.js';
import Bird from './components/bird.js';


const root = document.getElementById('root')

const animals_buttons = document.createElement('div')
animals_buttons.id = 'animal_buttons'
root.appendChild(animals_buttons)

const cat_button = document.createElement('button')
const dog_button = document.createElement('button')
const bird_button = document.createElement('button')

cat_button.innerText = 'CATS'
dog_button.innerText = 'DOGS'
bird_button.innerText = 'BIRDS'

animals_buttons.appendChild(cat_button)
animals_buttons.appendChild(dog_button)
animals_buttons.appendChild(bird_button)


let animal_content = document.createElement('div')
animal_content.id = 'animal_content'
root.appendChild(animal_content)

let all_animals_info = document.createElement('div')
all_animals_info.id = 'all_animals_info'
root.appendChild(all_animals_info)

let cat_info = document.createElement('div')
cat_info.id = 'cat_info'
all_animals_info.appendChild(cat_info)

let dog_info = document.createElement('div')
dog_info.id = 'dog_info'
all_animals_info.appendChild(dog_info)

let bird_info = document.createElement('div')
bird_info.id = 'bird_info'
all_animals_info.appendChild(bird_info)


let animal_description = []
let animal_button_value = ''

cat_button.addEventListener('click', () => {

    cat_info.style.display = 'flex';
    dog_info.style.display = 'none';
    bird_info.style.display = 'none';

    animal_content.replaceChildren();

    animal_description = ['Name', 'Age', 'Legs', 'Fur', 'Tail']
    animal_button_value = cat_button.textContent
    create_animal_form()

})


dog_button.addEventListener('click', () => {
    cat_info.style.display = 'none';
    dog_info.style.display = 'flex';
    bird_info.style.display = 'none';

    animal_content.replaceChildren();

    animal_description = ['Name', 'Age', 'Legs', 'Fur', 'Tail', 'Breed']
    animal_button_value = dog_button.textContent
    create_animal_form()

})


bird_button.addEventListener('click', () => {
    cat_info.style.display = 'none';
    dog_info.style.display = 'none';
    bird_info.style.display = 'flex';
    
    animal_content.replaceChildren();
    
    animal_description = ['Name', 'Age', 'Wings', 'Feathers', 'Tail', 'Beak']
    animal_button_value = bird_button.textContent
    create_animal_form()

})



function create_animal_form() {

    let cancel = document.createElement('span')
    cancel.id = 'cancel'
    animal_content.appendChild(cancel)

    cancel.addEventListener('click', () => {
        animal_content.replaceChildren()
    })

    let animal_form = document.createElement('form')
    animal_form.id = 'animal_form'
    animal_form.setAttribute("action", "javascript:void(0)");
    animal_content.appendChild(animal_form)

    for (let i = 0; i < animal_description.length; i++) {
        
        let label_title = document.createElement('label')
        label_title.innerText = animal_description[i]
        animal_form.appendChild(label_title)

        let input_title = document.createElement('input')
        input_title.id = animal_description[i] + '_input'
        input_title.type = 'text';
        animal_form.appendChild(input_title)

    }

    let sumbit_animal = document.createElement('input')
    
    sumbit_animal.type = 'submit'
    sumbit_animal.value = 'Pateikti'
    sumbit_animal.id = 'sumbit_animal'
    animal_form.appendChild(sumbit_animal)


    sumbit_animal.addEventListener('click', sumbit_animal_form)

    function sumbit_animal_form() {

        let name_input = document.getElementById('Name_input')
        let age_input = document.getElementById('Age_input')
        let tail_input = document.getElementById('Tail_input')
        

        let animal_info = document.createElement('div')
        animal_info.className = 'animal_info'

        let animal_table = document.createElement('table')
        animal_info.appendChild(animal_table)
        
        let newAnimal = []

        if (animal_button_value == 'CATS') {
            let fur_input = document.getElementById('Fur_input')
            let legs_input = document.getElementById('Legs_input')
            newAnimal = new Cat(name_input.value, age_input.value, legs_input.value, fur_input.value, tail_input.value);
            
            cat_info.appendChild(animal_info)

        }

        else if (animal_button_value == 'DOGS') {

            let breed_input = document.getElementById('Breed_input')
            let fur_input = document.getElementById('Fur_input')
            let legs_input = document.getElementById('Legs_input')

            newAnimal = new Dog(name_input.value, age_input.value, legs_input.value, fur_input.value, tail_input.value, breed_input.value)
        
            dog_info.appendChild(animal_info)
        
        }

        else if (animal_button_value == 'BIRDS') {
            
            let wings_input = document.getElementById('Wings_input')
            let feathers_input = document.getElementById('Feathers_input')
            let beak_input = document.getElementById('Beak_input')
            newAnimal = new Bird(name_input.value, age_input.value, wings_input.value, feathers_input.value, tail_input.value, beak_input.value)
            
            bird_info.appendChild(animal_info)
 
        }

        for (const i in newAnimal) {

            let tr = document.createElement('tr')
            animal_table.appendChild(tr)

            let animal_info_name = document.createElement('td')
            animal_info_name.innerText = newAnimal[i]

            tr.appendChild(animal_info_name)

        }

    
        document.getElementById("animal_form").reset();
        
    }

}











