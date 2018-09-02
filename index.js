var katzDeli = [];
function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}
function nowServing(line){
  if (line.length>0){
    var client = line[0];
    line.shift();
    return `Currently serving ${client}.`
  }else{
    return 'There is nobody waiting to be served!';
  }
}
function currentLine(line){
  if(line.length>0){
    var lineLength = `The line is currently: `;
    for (let i= 0; i < line.length; i++){
      lineLength += `${i+1}. ${line[i]}, `;
    }
    return lineLength.slice(0, lineLength.length-2);
  }else{
    return 'The line is currently empty.'
  }
}