const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const inputItems = $$('.container__form-input-block');

// Xử lý nhập thông tin
inputItems.forEach(function(inputItem, index) {
    const listInput = inputItem.querySelector('ul');
    const textInput = inputItem.querySelector('input');
    const mainText = inputItem.querySelector('.container__form-input-block-label-main')
    inputItem.onclick = function() {
        if(!listInput) {
            this.classList.add('active');
            if(textInput) {
                textInput.onblur = function() {
                    if(!textInput.value) {
                        inputItem.classList.add('required');
                    }
                    else {
                        inputItem.classList.remove('required');
                    }
                }
                textInput.oninput = function() {
                    inputItem.classList.remove('required');
                }
            }
        }
        else {
            listInput.classList.toggle('active'); 
            const listItems = inputItem.querySelectorAll('li');
            listItems.forEach(function(listItem) {
                listItem.onclick = function() {
                    mainText.innerText = listItem.innerText;
                    inputItem.classList.add('active');
                }
            });
        }
    }
})

// Tổ hợp xét tuyển
const complex = {
    A00: ["Toán", "Lí", "Hóa"],
    A01: ["Toán", "Lí", "Anh"],
    D01: ["Toán", "Văn", "Anh"]
}

// Xử lí chọn tổ hợp xét tuyển
const complexBox = $('.complexBox');
const complexList = complexBox.querySelector('ul');
const complexItems = $$('.blockAuto');

complexList.onclick = function() {
    const mainTextComplexBox = complexBox.querySelector('.container__form-input-block-label-main');
    if(mainTextComplexBox.innerText) {
        if(mainTextComplexBox.innerText === "A00") {
            for(let i = 0; i < 3; i++) {
                complexItems[i].classList.add('active');
                const span = complexItems[i].querySelector('.container__form-input-block-label-main');
                span.innerText = complex.A00[i];
            }
        }
        else if(mainTextComplexBox.innerText === "A01") {
            for(let i = 0; i < 3; i++) {
                complexItems[i].classList.add('active');
                const span = complexItems[i].querySelector('.container__form-input-block-label-main');
                span.innerText = complex.A01[i];
            }
        }
        else if(mainTextComplexBox.innerText === "D01") {
            for(let i = 0; i < 3; i++) {
                complexItems[i].classList.add('active');
                const span = complexItems[i].querySelector('.container__form-input-block-label-main');
                span.innerText = complex.D01[i];
            }
        }
    }
}

const markBlocks = $$('.mark');
const markAverage = $('.markAverage');
let average = 0;
let count = 0;

markBlocks.forEach(function(markBlock) {
    markBlock.oninput = function() {
       let num = Number(markBlock.querySelector('input').value);
    }
})

if(count === 9) {
    const text = markAverage.querySelector('.container__form-input-block-label-main');
    text.innerText = average/9;
    markAverage.classList.add('active')
}






