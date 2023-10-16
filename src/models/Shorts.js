module.exports = ( sequelize, DataTypes ) => {
    const Shorts = sequelize.define('Shorts', {
      title: DataTypes.STRING, //ประเภทกล้อง
      catagori: DataTypes.STRING,//ยี่ห้อกล้อง
      color: DataTypes.STRING,//ชื่อรุ่นกล้อง
      size:DataTypes.STRING,//ขนาดของเลนกล้อง
      price: DataTypes.STRING,   //ราคากล้อง
     
    })
    return Shorts
  }

  //mod 4 ได้ 0+1 = 1