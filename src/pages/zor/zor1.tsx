import Link from "next/link"



const Zor1 = () => {
    return(
        <>
            <div className="padding">
        <h1 className="yana-title">YANA to'rtta</h1>
        <img className="yana-img-4" src="https://beeline.uz/wp-content/uploads/2023/02/zor_13.jpg" alt="" />
    </div>

    <div className="birga">
        <div className="tafsilot">
            <h1 className="tafsilot-title">Tarif tafsilotlari</h1>
            <p className="tafsilot-title">O'zbekiston bo'yicha daqiqlar * <span className="limit6"><b>1 500</b>daq/oy</span> </p>
            <p className="tafsilot-title">Internet <span className="limit5"><b>3</b>GB/oy</span> </p>
            <p className="tafsilot-title">Telegram, Whatsapp, Viber va YouTube <span className="limit1"><b>9</b>GB/oy</span></p>
            <p className="tafsilot-title">O'zbekiston bo'yicha SMS * <span className="limit2"><b>500</b>sms/oy</span></p>
            <p className="tafsilot-title">Beeline TV: Telekanallar va Amediateka **</p>
            <p className="tafsilot-title">Ulanish kodi: *2*3#</p>
        </div>

        <div className="tarif">
            <p>Tarif</p>
            <h1>YANA uchta</h1>
            <div style={{display:'flex' , marginTop:'30px'}}><h1>20 000</h1><p style={{margin:'13px'}}>s'om/oy</p></div>
            <hr className="hr" />
            <Link href={'/menu/zor1Menu'}><button className="tarif-btn">Ulash</button></Link>
        </div>

    </div>
        </>
    )
}

export default Zor1