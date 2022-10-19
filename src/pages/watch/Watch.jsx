import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video
            className="video"
            autoPlay
            progress
            controls
            src="https://rr1---sn-o3o-jj0e.googlevideo.com/videoplayback?expire=1666031746&ei=IUxNY5TeOM6gsfIPoe2vqAk&ip=64.145.76.141&id=o-ADx0rrm_1Ch1zQKIhY7_K6ArvO2iwp2_ulDu4pwC-NVP&itag=135&aitags=133%2C134%2C135%2C160%2C242%2C243%2C244%2C278%2C394%2C395%2C396%2C397&source=youtube&requiressl=yes&spc=yR2vp5E-5uMskA7uNrpvkvF9BED34fs&vprv=1&mime=video%2Fmp4&gir=yes&clen=3179306&dur=107.006&lmt=1540942801547562&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5432432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAPIwmWIjBhGfwQvrAfex4mEu35dMmqt7tJ_j3xWBem11AiEAyPTKmYZqX0DGLJzOrp1rdWskWip9WVS3Qxi6TRGdx5o%3D&redirect_counter=1&rm=sn-a5me7s7z&req_id=b02f5f435df5a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=6b&mip=14.139.204.210&mm=31&mn=sn-o3o-jj0e&ms=au&mt=1666027787&mv=m&mvi=1&pcm2cms=yes&pl=22&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRAIgMHkravQGBMFNWZDlpbgc3XwjQMmUGX4sc53Vt58r4_ACIAbvEMiA4slTchTe5jCUDHLNuaCIz8cvoOF9iB43gRdX"
        />
    </div>
  )
}
