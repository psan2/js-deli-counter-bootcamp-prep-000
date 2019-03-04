var  ticketNumber = 1

function takeANumber(katzDeliLine){
  katzDeliLine.push(ticketNumber)
  var output = `Welcome, you are number ${ticketNumber}.`
  ticketNumber++
  return output
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${katzDeliLine.splice(0,1)}.`
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else{
    var line = []
    var i
    for(i = 0; i < katzDeliLine.length; i++){
      line.push(" " + (i+1) + ". " + katzDeliLine[i])
    }
  }
  return "The line is currently:"+ line
}
