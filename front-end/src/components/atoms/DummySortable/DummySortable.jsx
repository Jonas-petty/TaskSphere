import { useSortable } from "@dnd-kit/sortable";

function DummySortable({ id }) {
    const { setNodeRef } = useSortable({ id });
    return (
        <div
            ref={setNodeRef}
            style={{ height: "1px", visibility: "hidden" }}
        ></div>
    );
}

export default DummySortable;
