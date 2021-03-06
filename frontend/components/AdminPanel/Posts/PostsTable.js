import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux/Aux';
import SelectableTable from "../../UI/Table/SelectableTable/SelectableTable";
import {ADMIN_POST_TABLE_COLUMNS,  POSTS_LIST_API} from "../../../constants";
import Paginator from "../../UI/Pagination/Paginator";
import DataSearcher from "../../UI/Filters/DataSearcher";
import {isEmpty} from "../../../lib/utils";
import {POSTS_FORM_DATA} from "../../../constants/FormDataConst";
import Alert from "../../UI/Notifications/Alert";
import {PostsDataCenterContext} from "./PostsDataCenter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenNib} from "@fortawesome/free-solid-svg-icons/faPenNib";
import Link from "next/link";
import {ADMIN_EDIT_POST_URL, ADMIN_NEW_POST_URL} from "../../../constants/URLs";

const AdminPanelPostsTable = (props) => {

    // consts that change depending on which table
    const columnData = ADMIN_POST_TABLE_COLUMNS;
    const dataCenterContext = PostsDataCenterContext;
    const pageTitle = "Posts";
    const dataListFetchURL = POSTS_LIST_API;
    const editObjectFormData = POSTS_FORM_DATA;
    const newObjectFormData = POSTS_FORM_DATA;
    const imgFieldName = 'main_img';

    const {
        alertProps: alertProps,
        updateEditObjFormData: updateEditObjFormData,
        dataManipulationComplete: dataManipulationComplete,
    } = useContext(dataCenterContext);

    let isActionRequired = true;
    let createSearchKeys = (columns = []) => {
        return columns.filter(item => {
            return !item.hideOnDisplay;
        }).map(item => {
            let type = (isEmpty(item.type) || item.type==="select") ? "text": item.type;
            return {
                key: item.accessor,
                type: type,
                nested: item.nested,
                multiple: item.multiple,
                displayField: item.displayField
            }
        });
    };
    let bunchActionData = [
        {
            label: 'delete posts',
            value: 'delete',
        },
    ];

    let onEditObjFormSubmitted = async (formData) => {
        if(formData[imgFieldName].length < 1){
            delete await formData[imgFieldName];
        }
        await updateEditObjFormData(formData);
    };

    return (
        <Aux>
            <Alert {...alertProps} />

            <div className="px-6 py-2 mb-3 float-none">
                <div className="float-left font-bold text-xl">{pageTitle}</div>
                <Link href={ADMIN_NEW_POST_URL}>
                    <button id="new-post-btn" className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right`}>
                        <FontAwesomeIcon icon={faPenNib} className="pr-1"/>  Write a post
                    </button>
                </Link>
            </div>
            <div className="float-none w-full py-5"> </div>

            <DataSearcher
                searchKeys={createSearchKeys(columnData)}
                dataListFetchURL={dataListFetchURL}
                dataCenterContext={dataCenterContext}>
                <Paginator
                    isActionRequired={isActionRequired}
                    columns={columnData}>
                    <SelectableTable
                        isActionsRequired={isActionRequired}
                        columns={columnData}
                        actionData={bunchActionData}
                        editObjFormData={editObjectFormData}
                        onEditObjFormSubmitted={(formData) => onEditObjFormSubmitted(formData)}
                        dataCenterContext={dataCenterContext}
                        onEditClickedRedirect={
                            (rowObj) => {
                                return {url: {pathname: ADMIN_EDIT_POST_URL, query: {id: rowObj.id}}, as: {pathname: ADMIN_EDIT_POST_URL, query: {id: rowObj.id}}, options:{}}
                            }
                        }
                    />
                </Paginator>
            </DataSearcher>
        </Aux>
    )

};

AdminPanelPostsTable.defaultProps = {
    keyField: "id"
};

AdminPanelPostsTable.propTypes = {
    keyField: PropTypes.string
};

export default AdminPanelPostsTable