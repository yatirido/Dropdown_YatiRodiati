import React, { Component } from 'react';
import './App.css';

class App extends Component 
{

  state =
  {
      jenjang : 'Pilih Jenjang',
      tingkatan:[],
      Pradasar :['PAUD (Pendidikan Anak Usia Dini)','TK (Taman Kanak-Kanak)','RA (Raudatul Athfal)'],
      Dasar : ['SD (Sekolah Dasar)','MI (Madrasah Ibtidaiyah)','SMP (Sekolah Menengah Pertama)','MTs (Madrasah Tsanawiyah)'],
      Menengah : ['SMA (Sekolah Menengah Atas)', 'MA (Madrasah Aliyah)','SMK(Sekolah Menengah Kejuruan)'],
      Tinggi : ['D3 Diploma','S1/D4 Sarjana' ,'S2 Magister','S3 Doktoral']
    }

  }

  klikpradasar()
  {
    this.setState({tingkatan:this.state.Pradasar})
    this.setState({jenjang:'Pendidikan Pra Sekolah'})
  }
  
  klikdasar()
  {
    this.setState({tingkatan:this.state.Dasar})
    this.setState({jenjang:'Pendidikan Dasar'})
  }
  
  klikmenengah()
  {
    this.setState({tingkatan:this.state.Menengah})
    this.setState({jenjang:'Pendidikan Menengah'})
  }
  
  kliktinggi()
  {
    this.setState({tingkatan:this.state.Tinggi})
    this.setState({jenjang:'Pendidikan Tinggi'})
  }
  
  render() 
  {
  
    var listtingkatan = this.state.tingkatan.map(
      (item,i)=>
      {
        return (
        <li> <a id='y' href='#a' onClick={()=>{klik()}}>{item}</a></li>
        )
      }
    )
  
    function klik()
    {
      var isi = document.getElementById('y').innerHTML
      document.getElementById('x').innerHTML = isi
    }

    return (

      <div>
        <div className="dropdown">
          <button className='btn-style btn btn-success dropdown-toggle form-control' data-toggle='dropdown'>
            <p>{this.state.jenjang} <div className='caret'></div> </p></button>
          <ul className='dropdown-menu'>
            <li><a href='#1' onClick={()=>{this.klikpradasar();}}> Pendidikan Pra Sekolah</a></li>
            <li><a href='#2' onClick={()=>{this.klikdasar();}}> Pendidikan Dasar </a> </li>
            <li><a href='#3' onClick={()=>{this.klikmenengah();}}> Pendidikan Menengah </a> </li>
            <li><a href='#4' onClick={()=>{this.kliktinggi();}}> Pendidikan Tinggi </a> </li>
          </ul>
        </div>

        <div>
            <p></p>
          {listtingkatan}
        </div>
        
      </div>
    );
  }
}

export default App;