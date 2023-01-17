const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numbersOfPeopleDiv = document.getElementById('numberOfPeople')
const totalPerPersonDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numbersOfPeopleDiv.innerText)

const calculateBill = () => {
  let bill = Number(billInput.value)
  let tipPercentage = Number(tipInput.value) / 100
  let tipAmount = bill * tipPercentage 
  let totalAmount = tipAmount + bill
  let totalPerPerson = totalAmount / numberOfPeople
  totalPerPersonDiv.innerText = totalPerPerson
}

const increasePeople = () => {

}

const decreasePeople = () => {


  if (poeple <= 1) {
    return
  }
}