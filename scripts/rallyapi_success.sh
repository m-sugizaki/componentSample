#!/usr/bin/env bash
set -e

echo "Update Rally"

CURDIR=`pwd`

US=`git log -1 | grep US`
echo ${US}

export TZ="Asia/Tokyo"
DATESTR=`date "+%Y%m%d %H%M"`
echo ${DATESTR}

TXT="componentSample job SUCCESS!!! (${DATESTR})"
echo ${TXT}

ACT=2
echo ${ACT}

cd scripts/AgileAPIScript_Run
pwd

cd ${CURDIR}
pwd