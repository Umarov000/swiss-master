-- AlterEnum
ALTER TYPE "UserRole" ADD VALUE 'SUPERADMIN';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "activationLink" TEXT,
ADD COLUMN     "otp_code" TEXT,
ADD COLUMN     "otp_expire" TIMESTAMP(3),
ADD COLUMN     "resetLink" TEXT,
ADD COLUMN     "token" TEXT;
