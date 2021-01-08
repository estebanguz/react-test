import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getAllStats } from 'enl-api/stats';
import { leadStatusDesc } from '../../../utils/tools/leadStatusDesc';

export const useFilter = () => {
  const [initialDate, setInitialDate] = useState(
    moment()
      .startOf('M')
      .format('YYYY-MM-DD')
  );
  const [finalDate, setFinalDate] = useState(
    moment()
      .endOf('M')
      .format('YYYY-MM-DD')
  );
  const [d, setData] = useState([]);


  useEffect(() => {
    console.log(d.length);
    if (d.length <= 0) {
      getStats();
    }
  }, [d]);

  const getStats = async () => {
    const stats = await getAllStats({
      initialDate,
      finalDate,
    });
    const _temp = [];
    stats.data.message.map((colab, index) => {
      const _colab = [];
      colab.stats.map((stat, index) => {
        _colab.push({
          name: leadStatusDesc({ status: stat.name }),
          leads: stat.count,
        });
      });
      _temp.push({
        id_colaborador: colab.id_colaborador,
        nombre: colab.nombre,
        stats: _colab,
      });
    });
    console.log(_temp);

    setData(_temp);
  };

  const propsFromFilter = {
    initialDate,
    finalDate,
    setInitialDate,
    setFinalDate,
    setData
  };

  return [propsFromFilter, d];
};
