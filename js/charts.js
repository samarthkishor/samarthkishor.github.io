function getLabel(value) {
  if (value < 30) {
    return "Beginner";
  } else if (value < 60) {
    return "Learning";
  } else if (value < 80) {
    return "Proficient";
  } else {
    return "Advanced";
  }
}

function drawChart(div, value) {
  return c3.generate({
    bindto: div,
    data: {
      columns: [["data", value]],
      type: "gauge"
    },
    tooltip: {
      show: false
    },
    legend: {
      hide: true
    },
    gauge: {
      label: {
        format: function(value, ratio) {
          return getLabel(value);
        },
        show: false
      },
      min: 0,
      max: 100,
      units: "",
      width: 20,
      expand: false
    },
    color: {
      pattern: ["#BF616A", "#D08770", "#EBCB8B ", "#A3BE8C"],
      threshold: {
        values: [30, 60, 80, 100]
      }
    },
    size: {
      height: 130
    }
  });
}

const pythonChart = drawChart("#python", 75);
const jsChart = drawChart("#js", 65);
const reactChart = drawChart("#react", 50);
const javaChart = drawChart("#java", 60);
const cppChart = drawChart("#cpp", 40);
const elispChart = drawChart("#elisp", 20);
const htmlChart = drawChart("#html", 60);
const shellChart = drawChart("#shell", 30);
