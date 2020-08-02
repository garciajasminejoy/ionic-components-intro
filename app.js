const btnAdd = document.querySelector('#btn-add');
const courseNameElement = document.querySelector('#course-name');
const courseRatingElement = document.querySelector('#course-rating');
const courseList = document.querySelector('#course-list');

const clear = () => {
    courseNameElement.value = '';
    courseRatingElement.value = '';
};

btnAdd.addEventListener('click', () => {
    const courseNameValue = courseNameElement.value.trim();
    const courseRatingValue = +courseRatingElement.value.trim();

    if (courseNameValue.length <= 0 || 
        courseRatingValue < 1 || courseRatingValue > 5
    ) {
        const alert = document.createElement('ion-alert');
        alert.header = 'Invalid inputs';
        alert.message = 'Please enter a valid course name and rating';
        alert.buttons = ['OK'];

        document.body.appendChild(alert);
        clear();
        return alert.present();
    }

    const item = document.createElement('ion-item');
    const itemCourse = document.createElement('b');
    itemCourse.textContent = courseNameValue;
    const itemRating = document.createElement('span');
    itemRating.innerHTML = `&nbsp;- ${courseRatingValue}/5`;

    item.appendChild(itemCourse);
    item.appendChild(itemRating);

    courseList.appendChild(item);

    clear();
});