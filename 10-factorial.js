#!/usr/bin/node

// استدعاء القيمة الأولى من سطر الأوامر
const arg = process.argv[2];

// دالة لحساب المضروب بشكل تكراري
function factorial(n) {
    const num = parseInt(n); // تحويل القيمة إلى عدد صحيح
    if (isNaN(num) || num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

// حساب المضروب وطباعة النتيجة
console.log(factorial(arg));
