import React from "react";
import MaterialTable from "material-table";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";

export default function Waitlist() {
  const [state] = React.useState({
    columns: [
      {
        title: "County",
        field: "county",
        defaultGroupOrder: 0,
      },
      { title: "City", field: "city" },
      { title: "Provider", field: "provider" },
      { title: "Days Waiting", field: "daysWaiting", type: "date" },
      { title: "Diagnosis Category", field: "diagnosisCategory" },
      { title: "Age Range", field: "ageRange" },
    ],

    data: [
      {
        county: "Androscoggin",
        city: "Auburn",
        provider: "",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("05/03/2020")
        ),
        diagnosisCategory: "CO",
        ageRange: "0 - 5",
      },
      {
        county: "Androscoggin",
        city: "Auburn",
        provider: "Bridges of Maine",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("03/23/2020")
        ),
        diagnosisCategory: "",
        ageRange: "11 - 15",
      },
      {
        county: "Androscoggin",
        city: "Auburn",
        provider: "",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("12/03/2019")
        ),
        diagnosisCategory: "DDID",
        ageRange: "0 - 5",
      },
      {
        county: "Androscoggin",
        city: "Lewiston",
        provider: "Gateway Community Services",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("07/23/2020")
        ),
        diagnosisCategory: "MHO",
        ageRange: "16 - 20",
      },
      {
        county: "Androscoggin",
        city: "Lewiston",
        provider: "",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("07/12/2020")
        ),
        diagnosisCategory: "",
        ageRange: "16 - 20",
      },
      {
        county: "Aroostook",
        city: "Amity",
        provider: "",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("06/13/2020")
        ),
        diagnosisCategory: "MHO",
        ageRange: "6 - 10",
      },
      {
        county: "Aroostook",
        city: "Ashland",
        provider: "Living Innovations",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("02/28/2020")
        ),
        diagnosisCategory: "DDID",
        ageRange: "11 - 15",
      },
      {
        county: "Aroostook",
        city: "Caribou",
        provider: "The Northern Lighthouse",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("11/08/2019")
        ),
        diagnosisCategory: "CO",
        ageRange: "16 - 20",
      },
      {
        county: "Aroostook",
        city: "Caribou",
        provider: "",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("10/08/2019")
        ),
        diagnosisCategory: "MHO",
        ageRange: "16 - 20",
      },
      {
        county: "Cumberland",
        city: "Fort Fairfield",
        provider: "",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("09/08/2019")
        ),
        diagnosisCategory: "CO",
        ageRange: "0 - 5",
      },
      {
        county: "Cumberland",
        city: "Fort Kent",
        provider: "Northeast Occupational",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("06/18/2020")
        ),
        diagnosisCategory: "DDID",
        ageRange: "0 - 5",
      },
      {
        county: "Franklin",
        city: "Rangely",
        provider: "",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("05/30/2020")
        ),
        diagnosisCategory: "MHO",
        ageRange: "11 - 15",
      },
      {
        county: "Hancock",
        city: "Bar Harbor",
        provider: "Downeast Horizons",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("07/30/2020")
        ),
        diagnosisCategory: "CO",
        ageRange: "11 - 15",
      },
      {
        county: "Hancock",
        city: "Otis",
        provider: "",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("05/30/2020")
        ),
        diagnosisCategory: "MHO",
        ageRange: "11 - 15",
      },
      {
        county: "Kennebec",
        city: "Cushing",
        provider: "",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("02/12/2020")
        ),
        diagnosisCategory: "MHO",
        ageRange: "0 - 5",
      },
      {
        county: "Knox",
        city: "Boothbay",
        provider: "",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("05/30/2020")
        ),
        diagnosisCategory: "DDID",
        ageRange: "6 - 10",
      },
      {
        county: "Lincoln",
        city: "Damariscotta",
        provider: "",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("05/10/2020")
        ),
        diagnosisCategory: "CO",
        ageRange: "11 - 15",
      },
      {
        county: "Oxford",
        city: "Bryant Pont",
        provider: "The Progress Center",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("06/30/2020")
        ),
        diagnosisCategory: "MHO",
        ageRange: "11 - 15",
      },
      {
        county: "Penobscot",
        city: "Bangor",
        provider: "Care & Comfort",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("04/10/2020")
        ),
        diagnosisCategory: "MHO",
        ageRange: "11 - 15",
      },
      {
        county: "Piscataquis",
        city: "Guilford",
        provider: "",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("01/24/2020")
        ),
        diagnosisCategory: "CO",
        ageRange: "16 - 20",
      },
      {
        county: "Sagadahoc",
        city: "Bath",
        provider: "",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("05/30/2020")
        ),
        diagnosisCategory: "DDID",
        ageRange: "11 - 15",
      },
      {
        county: "Somerset",
        city: "Madison",
        provider: "",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("05/30/2020")
        ),
        diagnosisCategory: "CO",
        ageRange: "0 - 5",
      },
      {
        county: "Waldo",
        city: "Belfast",
        provider: "Sequel Care of Maine",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("04/30/2020")
        ),
        diagnosisCategory: "MHO",
        ageRange: "11 - 15",
      },
      {
        county: "Washington",
        city: "Addison",
        provider: "",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("05/30/2020")
        ),
        diagnosisCategory: "CO",
        ageRange: "11 - 15",
      },
      {
        county: "York",
        city: "Kennebunk",
        provider: "React Behavioral Health",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("07/30/2020")
        ),
        diagnosisCategory: "MHO",
        ageRange: "11 - 15",
      },
      {
        county: "York",
        city: "Wells",
        provider: "",
        daysWaiting: differenceInCalendarDays(
          new Date(Date.now()),
          new Date("05/30/2020")
        ),
        diagnosisCategory: "CO",
        ageRange: "0 - 5",
      },
    ],
  });

  return (
    <MaterialTable
      title=""
      columns={state.columns}
      data={state.data}
      options={{
        paging: false,
        grouping: true,
        padding: "dense",
        headerStyle: {
          fontSize: "small",
          fontWeight: "bold",
        },
        exportButton: true,
        exportAllData: true,
      }}
    />
  );
}
