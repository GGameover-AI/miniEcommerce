import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  products = [
    { id: 1, name: "ข้าวหอมมะลิ", category: "อาหาร", descript: "Lorem ipsum dolor sit amet", price: 50, quantity: 10 },
    { id: 2, name: "สลัดผักรวม", category: "อาหาร", descript: "Lorem ipsum dolor sit amet", price: 80, quantity: 15 },
    { id: 3, name: "ไก่ย่างสมุนไพร", category: "อาหาร", descript: "Lorem ipsum dolor sit amet", price: 120, quantity: 8 },
    { id: 4, name: "น้ำผลไม้รวม", category: "อาหาร", descript: "Lorem ipsum dolor sit amet", price: 60, quantity: 20 },
    { id: 5, name: "บะหมี่กึ่งสำเร็จรูป", category: "อาหาร", descript: "Lorem ipsum dolor sit amet", price: 15, quantity: 50 },

    { id: 6, name: "เสื้อยืดคอกลม", category: "เสื้อผ้า", descript: "Lorem ipsum dolor sit amet", price: 250, quantity: 30 },
    { id: 7, name: "กางเกงยีนส์", category: "เสื้อผ้า", descript: "Lorem ipsum dolor sit amet", price: 600, quantity: 25 },
    { id: 8, name: "แจ็คเก็ตกันหนาว", category: "เสื้อผ้า", descript: "Lorem ipsum dolor sit amet", price: 1200, quantity: 10 },
    { id: 9, name: "ชุดเดรสสวยๆ", category: "เสื้อผ้า", descript: "Lorem ipsum dolor sit amet", price: 800, quantity: 18 },
    { id: 10, name: "รองเท้าผ้าใบ", category: "เสื้อผ้า", descript: "Lorem ipsum dolor sit amet", price: 900, quantity: 20 },

    { id: 11, name: "โน้ตบุ๊ก", category: "ไอที", descript: "Lorem ipsum dolor sit amet", price: 25000, quantity: 5 },
    { id: 12, name: "สมาร์ทโฟน", category: "ไอที", descript: "Lorem ipsum dolor sit amet", price: 15000, quantity: 12 },
    { id: 13, name: "แท็บเล็ต", category: "ไอที", descript: "Lorem ipsum dolor sit amet", price: 12000, quantity: 7 },
    { id: 14, name: "หูฟังไร้สาย", category: "ไอที", descript: "Lorem ipsum dolor sit amet", price: 3500, quantity: 20 },
    { id: 15, name: "เมาส์เกมมิ่ง", category: "ไอที", descript: "Lorem ipsum dolor sit amet", price: 1500, quantity: 25 },

    { id: 16, name: "คุกกี้ช็อกโกแลต", category: "อาหาร", descript: "Lorem ipsum dolor sit amet", price: 30, quantity: 40 },
    { id: 17, name: "เสื้อเชิ้ตทำงาน", category: "เสื้อผ้า", descript: "Lorem ipsum dolor sit amet", price: 350, quantity: 22 },
    { id: 18, name: "Power Bank", category: "ไอที", descript: "Lorem ipsum dolor sit amet", price: 700, quantity: 30 },
    { id: 19, name: "ชาเขียว", category: "อาหาร", descript: "Lorem ipsum dolor sit amet", price: 45, quantity: 35 },
    { id: 20, name: "กางเกงขาสั้น", category: "เสื้อผ้า", descript: "Lorem ipsum dolor sit amet", price: 200, quantity: 28 }
  ];

  

}
