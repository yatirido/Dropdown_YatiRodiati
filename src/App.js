import React, { Component } from 'react';
import './App.css';

class App extends Component {
 
  state=
    {
      jenjang : 'Pilih Jenjang',
      tingkatan : [],
      Pradasar : ['PAUD (Pendidikan Anak Usia Dini)','TK (Taman Kanak-Kanak)','RA (Raudatul Athfal)'],
      Dasar : ['SD (Sekolah Dasar)','MI (Madrasah Ibtidaiyah)','SMP (Sekolah Menengah Pertama)','MTs (Madrasah Tsanawiyah)'],
      Menengah : ['SMA (Sekolah Menengah Atas)', 'MA (Madrasah Aliyah)','SMK (Sekolah Menengah Kejuruan)'],
      Tinggi : ['D3 Diploma','S1/D4 Sarjana' ,'S2 Magister','S3 Doktoral']
    }

  onklikpradasar()
  {
    this.setState(
      {
        tingkatan : this.state.Pradasar
      })
    this.setState(
      {
        jenjang : 'Pendidikan Pra Sekolah',
        newjenjang : 'Pendidikan Pra Sekolah'
      })
  }

  onklikdasar()
  {
    this.setState(
      {
        tingkatan : this.state.Dasar
      })
    this.setState(
      {
        jenjang: 'Pendidikan Dasar',
        newjenjang : 'Pendidikan Dasar'
      })
  }

  onklikmenengah()
  {
    this.setState(
      {
        tingkatan: this.state.Menengah
      })
    this.setState(
      {
        jenjang: 'Pendidikan Menengah',
        newjenjang: 'Pendidikan Menengah'
      })
  }

  onkliktinggi()
  {
    this.setState(
      {
        tingkatan : this.state.Tinggi
      })
    this.setState(
      {
        jenjang: 'Pendidikan Tinggi',
        newjenjang: 'Pendidikan Tinggi'
      })
  }

  render() 
  {

    var listtingkatan = this.state.tingkatan.map(
       (item,index)=>{
        return <li> {item}</li>
        }
      )

    return (
      <div>
        <p>
        <div className='dropdown'>
          <button className='btn btn-md btn-primary dropdown-toggle' data-toggle='dropdown' style={{marginLeft:'20px'}}>
            <p>{this.state.jenjang} <div className='caret'></div> </p></button>
          <ul className='dropdown-menu'>
            <li><a href='#1' onClick={()=>{this.onklikpradasar();}}> Pendidikan Pra Sekolah</a></li>
            <li><a href='#2' onClick={()=>{this.onklikdasar();}}> Pendidikan Dasar </a> </li>
            <li><a href='#3' onClick={()=>{this.onklikmenengah();}}> Pendidikan Menengah </a> </li>
            <li><a href='#4' onClick={()=>{this.onkliktinggi();}}> Pendidikan Tinggi </a> </li>
          </ul>
        </div>

        <div class="" style={{marginLeft:'20px'}}>
          <p>
            <br/>
            <strong>{this.state.newjenjang}</strong>
            <br/><br/>
            {listtingkatan}
          </p>
        </div>
        </p>
        
      </div>
    );
  }
}

export default App;