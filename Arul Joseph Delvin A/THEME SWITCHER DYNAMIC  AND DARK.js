<!DOCTYPE html>
<html>
<head>
    <title>Theme Switcher</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 100px;
            transition: 0.3s;
        }

        button {
            padding: 12px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
        }

        .dark {
            background-color: #222;
            color: white;
        }

        .light {
            background-color: white;
            color: #222;
        }
    </style>
</head>

<body class="light">

    <h1>Dynamic Theme Switcher</h1>
    <p id="message">Current theme: Light</p>

    <button id="themeButton">Switch to Dark Mode</button>

    <script>
        const button = document.getElementById("themeButton");
        const message = document.getElementById("message");
        const body = document.body;

        button.addEventListener("click", function () {

            if (body.classList.contains("light")) {
                body.classList.remove("light");
                body.classList.add("dark");

                message.textContent = "Current theme: Dark";
                button.textContent = "Switch to Light Mode";
            } else {
                body.classList.remove("dark");
                body.classList.add("light");

                message.textContent = "Current theme: Light";
                button.textContent = "Switch to Dark Mode";
            }
        });
    </script>

</body>
</html>
