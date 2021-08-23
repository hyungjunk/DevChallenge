import React, { useEffect, useMemo, useRef, useState } from "react";
import { InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import { xml2json } from "xml-js";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  animation: {
    duration: 1000,
  },
};
const VerticalBar = (props) => {
  const { data, options } = props;
  return <Bar data={data} options={options} redraw={false} />;
};

const Charts: React.FC = (props) => {
  const [dummy, setDummy] = useState(0);
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "확진자 수",
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });
  const memoizedData = useMemo(() => {
    return data;
  }, [data]);
  const isAnimated = useRef(false);
  const newOptions = {
    ...options,
    animation: isAnimated.current
      ? { duration: 0, onComplete: () => (isAnimated.current = true) }
      : { duration: 1000, onComplete: () => (isAnimated.current = true) },
  };

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      color: "red",
    },
    dropdownBtn: {
      color: "white",
      width: "10rem",
      display: "flex",
      justifyContent: "center",
      background: "var(--main-bg-color)",
    },
  }));
  const styles = useStyles();

  useEffect(() => {
    console.log("fetch");
    const range = new Date().getDate();
    const fetchResult = async () => {
      const url =
        "/getCovid19InfStateJson/Wo5oDrq3DoodeD%2FxyAuH9kIcx5z7iQcIssa6YvEkuW6H1Ssn0e2IWdcgsIZtaynpv1pDV%2F%2FoLUQ3A45r9Yhzsw%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20210816&endCreateDt=20210818";
      const response = await fetch(url);
      const rawText = await response.text();
      const json = JSON.parse(xml2json(rawText, { compact: true, spaces: 4 }));
      console.log(json);
      // 이게 하나의 아이템
      setData((data) => {
        const items = json.response.body.items.item.sort((a: any, b: any) => {
          return Number(a.stateDt._text) - Number(b.stateDt._text);
        });
        console.log(items);
        return {
          ...data,
          labels: [...items.map((i) => +i.stateDt._text)],
          datasets: [
            {
              label: "확진자 수",
              data: [...items.map((i) => +i.decideCnt._text)],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 99, 132, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(255, 99, 132, 1)",
              ],
              borderWidth: 1,
            },
          ],
        };
      });
    };
    fetchResult();
  }, []);

  return (
    <div className={"chart-wrapper"}>
      <button onClick={() => setDummy((d) => d + 1)}>Cause rerender</button>
      <div className={"dropdown-buttons"}>
        <InputLabel
          id="demo-simple-select-label"
          className={styles.dropdownBtn}
        >
          Age
        </InputLabel>
        <Select
          id="demo-simple-select"
          labelId="demo-simple-select-label"
          className={"dropdown"}
          label={"확진자"}
          onChange={() => console.log("change")}
        >
          <MenuItem value={10}>TenB</MenuItem>
        </Select>
        <Select
          id="demo-simple-select"
          labelId="demo-simple-select-label"
          className={"dropdown"}
          label={"종류"}
          onChange={() => console.log("change")}
        >
          <MenuItem value={10}>TenB</MenuItem>
        </Select>
        <Select
          id="demo-simple-select"
          labelId="demo-simple-select-label"
          className={"dropdown"}
          label={"기간"}
          onChange={() => console.log("change")}
        >
          <MenuItem value={10}>TenB</MenuItem>
        </Select>
        <Select
          id="demo-simple-select"
          labelId="demo-simple-select-label"
          className={"dropdown"}
          label={"지역"}
          onChange={() => console.log("change")}
        >
          <MenuItem value={10}>TenB</MenuItem>
        </Select>
      </div>
      <VerticalBar data={memoizedData} options={newOptions} />
      <style jsx>{`
        .chart-wrapper {
          background: var(--div-bg-color);
          width: 100%;
        }
        .dropdown-buttons {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          margin: auto;
        }
        .dropdown-label {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Charts;
