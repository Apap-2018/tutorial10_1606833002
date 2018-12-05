import React from 'react';
import { Link } from "react-router-dom";

export const DaftarStafFarmasiRow = (props) => {
    return (
        <tbody>
            {props.listStafFarmasi.map(staf => {
                return (
                    <tr key={staf.id}>
                        <td>{staf.nama}</td>
                        <td>{staf.jenis}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}