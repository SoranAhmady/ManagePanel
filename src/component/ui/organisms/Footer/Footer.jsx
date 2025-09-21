import { quikAcssecFooter, tarkhineShab, titleQuik } from "../../../../core/constans/quikAcssecFooter";
import { FooterContactUs } from "../../moloculse/FooterContactUs/FooterContactUs";
import { FooterItemBar } from "../../moloculse/FooterItemBar/FooterItemBar";
import { motion } from "framer-motion";
export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6}}
            className="bg-[url('/assets/p4.jpg')] bg-black/55 bg-blend-multiply flex justify-start gap-8 sm:justify-around sm:gap-16 flex-row-reverse pb-20 p-12 sm:px-24 bg-cover bg-top sm:bg-center">
            <div>
                <FooterItemBar title="دسترسی آسان" item={quikAcssecFooter} icon={titleQuik} />
            </div>
            <div>
                <FooterItemBar title="شعبه‌های ترخینه" item={tarkhineShab} />
            </div>
            <div className="  hidden sm:flex  ">
                <FooterContactUs />
            </div>
        </motion.footer>
    )
}