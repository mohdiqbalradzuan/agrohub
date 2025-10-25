import Particles from "../bg_effect/particles";
import * as FaIcons from "react-icons/fa6";

function MainPage() {
    return (
        <div className="main-page-container">
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
            <div className="app-main-page">
                <p className="display-2 fw-semibold pt-3 pb-4">
                    Selamat Datang ke <span className="text-warning">Agro</span>
                    <span className="text-success-emphasis">hub</span>
                </p>
                <img
                    src="./images/logo_square_white.png"
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
                <form class="w-50" role="search">
                    <div class="input-group w-100">
                        <span class="input-group-text">
                            <FaIcons.FaClipboardQuestion size="1.5em" />
                        </span>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            aria-label="chat-input"
                        ></input>
                        <span class="input-group-text">
                            <FaIcons.FaMicrophone size="1.5em" />
                        </span>
                    </div>
                </form>
                <span class="h6 fw-light fst-italic pt-2 pb-5">
                    Contoh: Boleh dapatkan maklumat penternak ikan Keli di
                    Selangor?
                </span>
            </div>
        </div>
    );
}

export default MainPage;
