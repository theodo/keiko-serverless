const getHandlerPath = (directoryPath: string): string => {
  const processRunLocation = process.cwd();

  return directoryPath.replace(processRunLocation + '/', '') + '/handler.main';
};

export default getHandlerPath;
