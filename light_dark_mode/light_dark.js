const modeToggle = document.getElementById('modeToggle');
        const modeImage = document.getElementById('modeImage');
        const content = document.getElementById('content');
        let darkMode = false;

        modeToggle.addEventListener('click', () => {
            darkMode = !darkMode;
            if (darkMode) {
                document.body.style.backgroundColor = 'black';
                modeImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVGOxr917jZcYX3LQ-scttlUSQmMNEx04Q83vOhNGa0y7WGKdXat9gtwjqw&s';
            } else {
                document.body.style.backgroundColor = 'white';
                modeImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3575iLIRQTJ7eIspyJZNqed2RuQ3_CJFqxFrSD77NPmT7VbFsGR9VbTxVWG37Wl6stIQ&usqp=CAU';
            }
        });