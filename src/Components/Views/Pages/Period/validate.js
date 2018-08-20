const validate = values => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'ต้องการฟิลด์นี้'
    }
    if (!values.lastName) {
      errors.lastName = 'ต้องการฟิลด์นี้'
    }
    if (!values.email) {
      errors.email = 'ต้องการฟิลด์นี้'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'รูปแบบ E-mail ไม่ถูกต้อง ตัวอย่าง: email@example.com'
    }
    if(!values.telNumber){
      errors.telNumber ="ต้องการฟิลด์นี้"
    }else if(!/\(?([0-9]{2})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(values.telNumber)){
      errors.telNumber ="รูปแบบเบอร์โทรศัพท์ที่รองรับ 083-456-7899 และ 0834567899"
    }
    return errors
  }
  
  export default validate;