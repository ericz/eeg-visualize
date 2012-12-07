int analogPos = 0;     // potentiometer wiper (middle terminal) connected to analog pin 3
int analogNeg = 5;
// outside leads to ground and +5V
int valPos = 0;           // variable to store the value read
int valNeg = 0;

void setup()
{
  Serial.begin(9600);          //  setup serial
}

void loop()
{
  valPos = analogRead(analogPos);
  valNeg = -analogRead(analogNeg);  // read the input pin
  Serial.println(valPos + valNeg);             // debug value
}
