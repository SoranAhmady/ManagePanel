import { BranchPageCommentSection } from "../../component/ui/organisms/BranchPageCommentSection/BranchPageCommentSection";
import { BranchPageSlider } from "../../component/ui/organisms/BranchPageSliders/BranchPageSliders";
import { MenuPageBranchSection } from "../../component/ui/organisms/MenuPageBranchSection/MenuPageBranchSection";


export function BranchPage() {
    return (
        <div className="flex flex-col gap-10">
            <BranchPageSlider />
            <div>
                <MenuPageBranchSection />
            </div>
            <div>
                <BranchPageCommentSection />
            </div>
        </div>
    )
}