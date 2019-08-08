# blink.js

Blink.js is a simple library for creating blinking text. Blinking interval is 100ms.

## Syntay

```javascript
blink("outputElement","text");
```
### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="blink.js"></script>
    <title>Document</title>
</head> 
<body>
    
        
        
        <p id="output"></p>

    <script>
        let x = false;
       const btn = document.querySelector('#submit');
      
        blink("output","Marko");
    </script>

    
</body>
</html>
```
