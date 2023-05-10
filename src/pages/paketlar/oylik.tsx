import Link from "next/link"



const Oylik = () => {
    return(
        <>

        <div className="main">
            <h1>Тарифные планы</h1>
            
            <div className="main-buttons">
                <Link href={'/paketlar'}><button className="btn">Barcha</button></Link>
                <Link href={'/paketlar/kunlik'}><button className="btn">Kunlik</button></Link>
                <Link href={'/paketlar/haftalik'}><button className="btn">Haftalik</button></Link>
                <Link href={'/paketlar/oylik'}><button className="btn">Oylik</button></Link>
                <Link href={'/paketlar/tungi'}><button className="btn">Tungi</button></Link>
                <Link href={'/paketlar/internet'}><button className="btn">4G</button></Link>
            </div>
        </div>

            <h1 className="kunlik">Oylik</h1>

        <div className="sotuv">
        <div className="paket1">
        <div className="left">
        <p className="int">Internet-paketlar</p>
        <h1 className="GB">150 GB <br /> <span>1-oyga</span> </h1>
        </div>

        <div className="som5">
            <h1>150 000</h1>
            <h2 className="pul">so'm</h2>
            <Link href={'/toggleMenu'}><button className="ulash-btn">Ulash</button></Link>
        </div>
    </div>


    <div className="paket">
        <div className="left">
        <p className="int">Internet-paketlar</p>
        <h1 className="GB">100 GB <br /> <span>1-oyga</span> </h1>
        </div>

        <div className="som4">
            <h1 className="arzon">130 000</h1>
            <h2 className="pul1">so'm</h2>
            <Link href={'/toggleMenu'}><button className="ulash-btn1">Ulash</button></Link>
        </div>
    </div>


    <div className="paket">
        <div className="left">
        <p className="int">Internet-paketlar</p>
        <h1 className="GB">75 GB <br /> <span>1-oyga</span> </h1>
        </div>

        <div className="som5">
            <h1 className="arzon1">120 000</h1>
            <h2 className="pul2">so'm</h2>
            <Link href={'/toggleMenu'}><button className="ulash-btn2">Ulash</button></Link>
        </div>
    </div>
</div>


<div className="sotuv1">
        <div className="paket1">
        <div className="left">
        <p className="int">Internet-paketlar</p>
        <h1 className="GB">50 GB <br /> <span>1-oyga</span> </h1>
        </div>

        <div className="som1">
            <h1>90   000</h1>
            <h2 className="pul">so'm</h2>
            <Link href={'/toggleMenu'}><button className="ulash-btn">Ulash</button></Link>
        </div>
    </div>


    <div className="paket">
        <div className="left">
        <p className="int">Internet-paketlar</p>
        <h1 className="GB">30 GB <br /> <span>1-oyga</span> </h1>
        </div>

        <div className="som">
            <h1 className="arzon">75 000</h1>
            <h2 className="pul">so'm</h2>
            <Link href={'/toggleMenu'}><button className="ulash-btn">Ulash</button></Link>
        </div>
    </div>


    <div className="paket">
        <div className="left">
        <p className="int">Internet-paketlar</p>
        <h1 className="GB">20 GB <br /> <span>1-oyga</span> </h1>
        </div>

        <div className="som">
            <h1 className="arzon">65 000</h1>
            <h2 className="pul">so'm</h2>
            <Link href={'/toggleMenu'}><button className="ulash-btn">Ulash</button></Link>
        </div>
    </div>
</div>


<div className="sotuv1">
        <div className="paket1">
        <div className="left">
        <p className="int">Internet-paketlar</p>
        <h1 className="GB">10 GB <br /> <span>1-oyga</span> </h1>
        </div>

        <div className="som1">
            <h1>50 000</h1>
            <h2 className="pul">so'm</h2>
            <Link href={'/toggleMenu'}><button className="ulash-btn">Ulash</button></Link>
        </div>
    </div>


    <div className="paket">
        <div className="left">
        <p className="int">Internet-paketlar</p>
        <h1 className="GB">2 GB <br /> <span>1-oyga</span> </h1>
        </div>

        <div className="som">
            <h1 className="arzon">17 000</h1>
            <h2 className="pul">so'm</h2>
            <Link href={'/toggleMenu'}><button className="ulash-btn">Ulash</button></Link>
        </div>
    </div>


    <div className="paket">
        <div className="left">
        <p className="int">Internet-paketlar</p>
        <h1 className="GB">5 GB <br /> <span>1-oyga</span> </h1>
        </div>

        <div className="som">
            <h1 className="arzon">30 000</h1>
            <h2 className="pul">so'm</h2>
            <Link href={'/toggleMenu'}><button className="ulash-btn">Ulash</button></Link>
        </div>
    </div>
</div>


<div className="paket2">
        <div className="left">
        <p className="int">Internet-paketlar</p>
        <h1 className="GB">5 GB <br /> <span>1-oyga</span> </h1>
        </div>

        <div className="som">
            <h1 className="arzon">30 000</h1>
            <h2 className="pul">so'm</h2>
            <Link href={'/toggleMenu'}><button className="ulash-btn">Ulash</button></Link>
        </div>
    </div>
        </>
    )
}

export default Oylik