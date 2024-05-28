const myForm = document.querySelector('form')
console.log(myForm)


myForm.addEventListener('submit',saveForm)

     let arr = [];

    function saveForm(event){
        event.preventDefault()

        let Name = document.getElementById('name').value;

        let EmployeeID = document.getElementById('employeeID').value;

        let Department = document.getElementById('department').value;

        let Exp = document.getElementById('experience').value;

        let Email = document.getElementById('email').value;

        let Mobile = document.getElementById('phone').value;

        let object={
            DName : Name,
            DEmpId : EmployeeID,
            DDepartment : Department,
            DExp : Exp,
            DEmail : Email,
            Dmobile : Mobile
        }
        console.log(object)

        arr.push(object)
            console.log(arr)

            display(arr);
    }

    function display(arr){
        document.querySelector("tbody").innerHTML ="";

        arr.forEach(function(data){

            let tr = document.createElement("tr")

            let name = document.createElement("td")
            name.innerText =data.DName;

            
            let id = document.createElement("td")
            id.innerText =data.DEmpId;

            
            let department = document.createElement("td")
            department.innerText =data.DDepartment;
 0
            
            let exp = document.createElement("td")
            exp.innerText =data.DExp;
            
            let email = document.createElement("td")
            email.innerText =data.DEmail;
            
            let mob = document.createElement("td")
            mob.innerText =data.Dmobile;

            let role = document.createElement("td")

            let roleText = giveRole(data.DExp)
            role.innerText = roleText;
            role.id = 'green'

            let DelEle = document.createElement("td")
            DelEle.innerText = 'Delete'
            DelEle.id = 'red'
            DelEle.style.cursor = 'pointer'

            DelEle.addEventListener("click" ,function(event){
                event.target.parentNode.remove()
            })

            tr.append(name,id,department,exp,email,mob,role,DelEle)
            document.querySelector("tbody").append(tr)
            
        });
    }


    function giveRole(DExp){
        if(DExp > 5 ){
            return 'Senior'
        }

        else if(DExp >= 2 && DExp <= 5 ){
            return 'Junior'
        }

        else if(DExp < 2){
            return 'Fresher'
        }
    }

    