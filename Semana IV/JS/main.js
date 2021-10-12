const form = document.querySelector( '#dataForm')
form.addEventListener('submit', save)

const removeButton = document.querySelector('#remove')
removeButton.addEventListener('click, remove')



const txtFirstName = document.querySelector('#txtPerFirstName')
const txtLastName = document.querySelector('#txtPerLastName')
const txtEmail = document.querySelector('#txtPerEmail')
const txtPhone = document.querySelector('#txtPerPhone')

const txtCompanyName = document.querySelector('#txtJobName')
const txtWorkStartDate = document.querySelector('#txtJobStart')
const txtWorkEndDate = document.querySelector('#txtJobEnd')
const txtPosition = document.querySelector('#txtJobPosition')

const txtInstitutionName = document.querySelector('#txtEduName')
const txtInstitutionStartDate = document.querySelector('#txtEduStart')
const txtInstitutionEndDate = document.querySelector('#txtEduEnd')
const txtTitle = document.querySelector('#txtEduTitle')

const txtSkill1 = document.querySelector('#txtSkill1')
const txtSkill2 = document.querySelector('#txtSkill2')
const txtSkill3 = document.querySelector('#txtSkill3')
const txtSkill4 = document.querySelector('#txtSkill4')


function remove(e){
    localStorage.removeItem("firstName")
    localStorage.removeItem("lastName")
    localStorage.removeItem("email")
    localStorage.removeItem("phone")

    localStorage.removeItem("company")
    localStorage.removeItem("workStartDate")
    localStorage.removeItem("workEndDate")
    localStorage.removeItem("position")

    localStorage.removeItem("Institution")
    localStorage.removeItem("institutionStartDate")
    localStorage.removeItem("institutionEndDate")
    localStorage.removeItem("title")

    localStorage.removeItem("skill1")
    localStorage.removeItem("skill2")
    localStorage.removeItem("skill3")
    localStorage.removeItem("skill4")


    txtFirstName.value = ""
    txtLastName.value = ""
    txtEmail.value = ""
    txtPhone.value = ""

    txtCompanyName.value = ""
    txtWorkStartDate.value = ""
    txtWorkEndDate.value = ""
    txtPosition.value = ""

    txtInstitutionName.value = ""
    txtInstitutionStartDate.value = ""
    txtInstitutionEndDate.value = ""
    txtTitle.value = ""

    txtSkill1.value = ""
    txtSkill2.value = ""
    txtSkill3.value = ""
    txtSkill4.value = ""

}

if(localStorage.getItem("firstName") != null){
    txtFirstName.value = localStorage.getItem("firstName")
}
if(localStorage.getItem("lastName") != null){
    txtLastName.value = localStorage.getItem("lastName")
}
if(localStorage.getItem("email") != null){
    txtEmail.value = localStorage.getItem("email")
}
if(localStorage.getItem("phone") != null){
    txtPhone.value = localStorage.getItem("phone")
}

if(localStorage.getItem("company") != null){
    txtCompanyName.value = localStorage.getItem("company")
}
if(localStorage.getItem("workStartDate") != null){
    txtWorkStartDate.value = localStorage.getItem("workStartDate")
}
if(localStorage.getItem("workEndDate") != null){
    txtWorkEndDate.value = localStorage.getItem("workEndDate")
}
if(localStorage.getItem("position") != null){
    txtPosition.value = localStorage.getItem("position")
}

if(localStorage.getItem("Institution") != null){
    txtInstitutionName.value = localStorage.getItem("Institution")
}
if(localStorage.getItem("institutionStartDate") != null){
    txtInstitutionStartDate.value = localStorage.getItem("institutionStartDate")
}
if(localStorage.getItem("institutionEndDate") != null){
    txtInstitutionEndDate.value = localStorage.getItem("institutionEndDate")
}
if(localStorage.getItem("title") != null){
    txtTitle.value = localStorage.getItem("title")
}

if(localStorage.getItem("skill1") != null){
    txtSkill1.value = localStorage.getItem("skill1")
}
if(localStorage.getItem("skill1") != null){
    txtSkill2.value = localStorage.getItem("skill2")
}
if(localStorage.getItem("skill1") != null){
    txtSkill3.value = localStorage.getItem("skill2")
}
if(localStorage.getItem("skill1") != null){
    txtSkill4.value = localStorage.getItem("skill2")
}


function save(e){
    
    var firstName = txtFirstName.value
    var lastName = txtLastName.Value
    var email = txtEmail.value
    var phone = txtPhone.value

    var company = txtCompanyName.value
    var workStartDate = txtWorkStartDate.value
    var workEndDate = txtWorkEndDate.value
    var position = txtPosition.value

    var institution = txtInstitutionName.value
    var institutionStartDate = txtInstitutionStartDate.value
    var institutionEndDate = txtInstitutionEndDate.value
    var title = txtTitle.value

    var skill1 = txtSkill1.value
    var skill2 = txtSkill2.value
    var skill3 = txtSkill3.value
    var skill4 = txtSkill4.value

    localStorage.setItem("firstName", firstName)
    localStorage.setItem("lastName", lastName)
    localStorage.setItem("email", email)
    localStorage.setItem("phone", phone)

    localStorage.setItem("company", company)
    localStorage.setItem("workStartDate", workStartDate)
    localStorage.setItem("workEndDate", workEndDate)
    localStorage.setItem("position", position)

    localStorage.setItem("institution", institution)
    localStorage.setItem("institutionStartDate", institutionStartDate)
    localStorage.setItem("institutionEndDate", institutionEndDate)
    localStorage.setItem("title", title)

    localStorage.setItem("skill1", skill1)
    localStorage.setItem("skill2", skill2)
    localStorage.setItem("skill3", skill3)
    localStorage.setItem("skill4", skill4)


}