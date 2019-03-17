//récupérer le container
const students = [
    {
    nameStudent: 'Bédlé Geoffrey',
    imageStudent: 'geoffrey',
    promotion: 'Fenix',
    imageLogo : 'fenix',
    language: 'PHP',
    detail: 'detail-Geoffrey'
    },
    {
    nameStudent: 'Céladon Malika',
    imageStudent: 'Malika',
    promotion: 'Fenix',
    imageLogo : 'fenix',
    language: 'PHP',
    detail: 'detail-Malika'    
    },
    {
    nameStudent: 'Seguinotte Bertrand',
    imageStudent: 'bertrand',
    promotion: 'Fenix',
    imageLogo : 'fenix',
    language: 'JS',
    detail: 'detail-Bertrand'
    }
];

const trombiFilter = (listStudents, languageFilter = 'ALL') => {
    const tableTarget = document.getElementsByClassName('espace')[0];
    const tableOrigin = document.getElementsByClassName('bloc-image')[0];

    tableOrigin.innerHTML = '';
    
    for (let i = 0; i<listStudents.length; i +=1){
        const student = listStudents[i];
        if(listStudents[i].language === languageFilter) {
            const elementStudent = tableTarget.cloneNode(true);
            //récupération href
            const elementDetail = elementStudent.getElementsByTagName('a')[0];
            elementDetail.href = student.detail + '.html';
            //récupération image
            const elementImage = elementStudent.getElementsByClassName('imageStudent')[0];
            elementImage.src = student.imageStudent + '.jpg';
            //récupération prénom nom
            const elementPrenomNom = elementStudent.getElementsByClassName('prenom-nom')[0];
            elementPrenomNom.innerHTML = student.nameStudent;
            //récupération logo
            const elementImageLogo = elementStudent.getElementsByClassName('logoPromo')[0];
            elementImageLogo.src = student.imageLogo + '.jpg';

            tableOrigin.appendChild(elementStudent);
        } else if(languageFilter === 'ALL') {
            const elementStudent = tableTarget.cloneNode(true);
            const elementDetail = elementStudent.getElementsByTagName('a')[0];
            elementDetail.href = student.detail + '.html';
            const elementImage = elementStudent.getElementsByClassName('imageStudent')[0];
            elementImage.src = student.imageStudent + '.jpg';
            const elementPrenomNom = elementStudent.getElementsByClassName('prenom-nom')[0];
            elementPrenomNom.innerHTML = student.nameStudent;
            const elementImageLogo = elementStudent.getElementsByClassName('logoPromo')[0];
            elementImageLogo.src = student.imageLogo + '.jpg';

            tableOrigin.appendChild(elementStudent);    
        }
    }
}    
trombiFilter(students);

