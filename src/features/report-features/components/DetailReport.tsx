import { ExpanderComponentProps } from "react-data-table-component";
import { ChecksheetInterface } from "../../../types/checksheet-type";

const DetailReport: React.FC<ExpanderComponentProps<ChecksheetInterface>> = ({ data: checksheetData }) => {
    return (
        <div className="flex flex-col gap-2 p-10">
            {checksheetData.ChecksheetDetails?.map((checksheetDetail, index) => (
                <div key={`checksheet-detail-${checksheetDetail.id}`} className="flex flex-col">
                    <span className="text-lg font-semibold border-b-2">Kegiatan {index + 1}</span>
                    <div className="flex gap-3">
                        <span className="font-semibold">Location : </span>
                        <span>{checksheetDetail.Locations.map((location) => location.name).join(" , ")}</span>
                    </div>
                    <div className="flex gap-3 border-b">
                        <span className="font-semibold">Kegiatan : </span>
                        <span>{checksheetDetail.Tasks.map((task) => task.name).join(" , ")}</span>
                    </div>
                </div>
            ))}
            <div className="flex flex-col gap-3 mt-5">
                <span className="text-lg font-semibold">Foto Kegiatan</span>
                {checksheetData.ChecksheetPictures?.map((pictures) => (
                    <div key={`picture-${pictures.id}`} className="flex items-center justify-center w-full p-10 shadow">
                        <img src={`${import.meta.env.VITE_APP_HOST_PUBLIC}/images/sb2/${pictures.photoUrl}`} alt="Picture Checksheet" className="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DetailReport;