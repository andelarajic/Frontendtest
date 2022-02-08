import { ChartData } from "../models/chartmodel";

async function http<T>(
    request: RequestInfo
): Promise<T> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
}

export async function getChartData() {
  return await http<ChartData>(
    "http://localhost:8081/chart"
  )
}

export async function getChartDataByType(type: string) {
  return await http<ChartData>(
    "http://localhost:8081/chart/" + type
  )
}

export async function getSmile() {
  return await http<number>(
    "http://localhost:8081/smile"
  )
}