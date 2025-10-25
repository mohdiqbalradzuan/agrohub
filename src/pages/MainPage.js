import * as FaIcons from "react-icons/fa6";
import Particles from "@bg_effect/particles";
import Logo from "@images/logo_square_white.png";
import ProductCard from "@components/ProductCard";

function MainPage() {
    return (
        <>
            <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={900}
                particleSpread={20}
                speed={0.2}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
            <div className="main-page-container">
                <div className="main-page-first-section">
                    <div className="app-main-page">
                        <p className="display-2 fw-semibold pt-3 pb-4">
                            Selamat Datang ke{" "}
                            <span className="text-warning app-firstname">
                                Agro
                            </span>
                            <span className="text-success-emphasis">hub</span>
                        </p>
                        <img
                            src={Logo}
                            className="app-logo"
                            alt="agrohub-logo"
                        />
                        <p className="h3 fw-normal pt-5 pb-5">
                            Nak cari produk ternakan harga borong?
                            <br />
                            Nak cari penternak berdekatan dengan lokasi anda?
                            <br />
                            Jom, chat dengan kami sekarang!
                        </p>
                        <form className="w-50" role="search">
                            <div className="input-group w-100">
                                <span className="input-group-text">
                                    <FaIcons.FaClipboardQuestion size="1.5em" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    aria-label="chat-input"
                                ></input>
                                <span className="input-group-text">
                                    <FaIcons.FaMicrophone size="1.5em" />
                                </span>
                            </div>
                        </form>
                        <span className="h6 fw-light fst-italic pt-2 pb-5">
                            Contoh: Boleh dapatkan maklumat penternak ikan Keli
                            di Selangor?
                        </span>
                    </div>
                </div>

                <div
                    className="main-page-second-section mb-4"
                    id="scroll-target"
                >
                    <ProductCard />
                </div>
            </div>
        </>
    );
}

export default MainPage;
