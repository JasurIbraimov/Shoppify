import { ProductInterface } from "@/common.types";
import Modal from "@/components/Modal";
import ProductForm from "@/components/ProductForm";
import { getProductDetail } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

const EditProduct = async ({ params: { id } }: { params: { id: string } }) => {
    const session = await getCurrentUser();
    if (!session?.user) redirect("/");
    const result = (await getProductDetail(id)) as {
        product: ProductInterface;
    };

    return (
        <Modal>
            <h3 className="modal-head-text">Edit Product</h3>
            <ProductForm
                type="edit"
                session={session}
                product={result?.product}
            />
        </Modal>
    );
};

export default EditProduct;
