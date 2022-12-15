let question_arr = ['Перші сережки, знайдені археологами, датовані близько','Козаки носили сережки, бо вони наділялися особливим змістом. Сережка, вдіта в мочку ЛІВОГО вуха, говорила про те, що він','Козаки носили сережки, бо вони наділялися особливим змістом. Сережка, вдіта в мочку ПРАВОГО вуха, говорила про те, що він','Козаки носили сережки, бо вони наділялися особливим змістом. Якщо житель Запорізької Січі носив сережки в двох вухах, це означало що він','Дівчата носили сережки, адже вважали, що вони не тільки звичайна прикраса, а й'];
let a1_arr = ["2000 року до н е.","втратив батька","втратив батька","втратив батька","допоможуть скоріше вийти заміж "]
let a2_arr = ["2500 року до н. е.","не має братів","не має братів","не має братів","ліки від хвороб"]
let a3_arr = ["2000 року н е.","в його роду не буде продовження","в його роду не буде продовження","в його роду не буде продовження","виконують бажання"]
let a4_arr = ["2500 року н е.","не має сестер","не має сестер","не має сестер","зможуть захистити від злих сил"]
let answer_arr = ["2500 року до н. е.","втратив батька","не має братів","в його роду не буде продовження","зможуть захистити від злих сил"]
let n_right_answer_arr = [2,1,2,3,4]
let right_answers = 0;
let n_answer = 4;

question.innerHTML=question_arr[n_question.value];
a1.innerHTML = a1_arr[n_question.value];
a2.innerHTML = a2_arr[n_question.value];
a3.innerHTML = a3_arr[n_question.value];
a4.innerHTML = a4_arr[n_question.value];
answer.innerHTML = answer_arr[n_question.value];

n_right_answer = n_right_answer_arr[n_question.value];
console.log(n_question.value)
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
  function f_out (){
        console.log(y1.checked);
        console.log(y2.checked);
        console.log(y3.checked);
        console.log(y4.checked);

        if (y1.checked){ n_a = 1;}
        if (y2.checked){ n_a = 2;}
        if (y3.checked){ n_a = 3;}
        if (y4.checked){ n_a = 4;}
        console.log(n_a);
        
        if (n_a == n_right_answer){
        right_answers += 1;
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        if (n_question.value == n_answer){
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b>"+right_answers+"</b>";
            right_div.appendChild(el1);
        }
        }
        else{
            right_answers-=1;
            right_div.classList.add("hidden");
            wrong_div.classList.remove("hidden");
            }
      }

      function f_out1 (){
        answer.classList.toggle("hidden");
        btn1.classList.toggle("opend");
      }

      function f_out2 (){
        right_div.classList.add("hidden");
        wrong_div.classList.add("hidden");
        k = Number(n_question.value);
        k+=1;
        n_question.value = k;
        console.log(n_question)
        question.innerHTML=question_arr[n_question.value];
        a1.innerHTML = a1_arr[n_question.value];
        a2.innerHTML = a2_arr[n_question.value];
        a3.innerHTML = a3_arr[n_question.value];
        a4.innerHTML = a4_arr[n_question.value];
        answer.innerHTML = answer_arr[n_question.value];
        
        n_right_answer =n_right_answer_arr[n_question.value];
        
      }