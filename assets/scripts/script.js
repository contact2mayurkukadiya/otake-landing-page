// mobile menu

const mobileMenuButton = document.querySelector('button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// FAQ functionality
document.addEventListener('DOMContentLoaded', function () {
    // Handle FAQ category buttons
    const categoryButtons = document.querySelectorAll('.cat-tag');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Handle FAQ questions
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('svg');
            const isOpen = !answer.classList.contains('hidden');

            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(a => {
                if (a !== answer) {
                    a.classList.add('hidden');
                    a.previousElementSibling.querySelector('svg').style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current answer
            answer.classList.toggle('hidden');
            icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });
});