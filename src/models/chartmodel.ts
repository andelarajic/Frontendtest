export interface ChartData{
    title: ChartTitle,
    subtitle: string,
    legend: ChartLegend,
    series: ChartSerie[],
    xAxis: XAxis,
    yAxis: YAxis
}

export interface ChartTitle {
    text: string,
    style: string
}

export interface ChartLegend {
    layout: string,
    align: string,
    verticalAlign: string
}

export interface ChartSerie {
    type: string,
    name: string,
    data: number[]
}

export interface XAxis{
    categories: string[],
    crosshair: boolean
}

export interface YAxis {
    min: number
}