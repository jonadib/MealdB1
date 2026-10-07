<!DOCTYPE html>
<html>
<head>
  <title>JS Color & Counter</title>
</head>
<body>

  <h1 id="number">0</h1>

  <button onclick="increase()">+</button>
  <button onclick="decrease()">-</button>
  <button onclick="changeColor()">Change Color</button>

  <script>
    let number = 0;

    function increase() {
      number++;
      document.getElementById("number").innerText = number;
    }

    function decrease() {
      number--;
      document.getElementById("number").innerText = number;
    }

    function changeColor() {
      document.getElementById("number").style.color = "red";
    }
  </script>

</body>
</html>